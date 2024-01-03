import React from 'react';
import {
  Dialog,
  Typography,
  DialogBody,
  DialogHeader,
  DialogFooter,
  Button,
} from '@material-tailwind/react';

import { QuestionItem } from '..';
import { stringResizer } from '../../utils/StringResizer';

import Aos from 'aos';
import 'aos/dist/aos.css';

type IQuestionTypes = {
    id: number;
    title: string;
    statement: string;
    rightAnswer: string;
    difficulty: number;
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
    saved: false,
    selected: false,
    index: number,
}

interface IFinishDialogProps {
    handleOpen: () => void;
    open: boolean;
    questions: IQuestionTypes[];
    handleQuestionIndex: (questionIndex: number) => void;
}

function FinishDialog({
  open,
  questions,
  handleOpen,
  handleQuestionIndex,
}: IFinishDialogProps): JSX.Element {
  const [questionStates, setQuestionStates] = React.useState({});

  React.useEffect(() => {
    Aos.init({ duration: 400 });
  }, []);

  React.useEffect(() => {
    if (open) {
      const storedStates = JSON.parse(localStorage.getItem('questionStates') || '{}');
      setQuestionStates(storedStates);
    }
  }, [open]);

  const getStatusText = () => {
    const allSelected = questions.every(question =>
      questionStates[question.id] && questionStates[question.id].selected
    );

    if (allSelected) {
      return (
        <>
          <Typography variant='paragraph' color='white' className='text-justify leading-5'>Ao clicar em <strong>Finalizar</strong>, você estará finalizando sua sessão de prova e enviando suas respostas para correção. <strong>Não será possível continuar a prova ou fazer alterações nas respostas após essa ação</strong>. Certifique-se de que deseja realmente finalizar a prova antes de confirmar essa ação.</Typography>
          <Button color='orange'>Finalizar</Button>
        </>
      );
    }

    const anySaved = questions.some(question =>
      questionStates[question.id] && questionStates[question.id].saved
    );

    return anySaved ? (
      <>
        <Typography variant='paragraph' color='white' className='text-justify leading-5'>Você possui questões ainda não marcadas</Typography>
        <Button color='orange' disabled>Finalizar</Button>
      </>
    ) : '';
  };

  return (
    <>
      <Dialog
        open={open}
        handler={handleOpen}
        className="border border-gray-800 bg-modal-bg"
      >
        <DialogHeader className='flex rounded-t-lg'>
          <div className='w-full'>
            <Typography variant="h4" className='text-blue-gray-100'>
                Processo seletivo
            </Typography>

            <div className='flex w-full justify-between' >
              <Typography variant='lead' className='text-blue-gray-300'>
                <strong className='text-blue-gray-300'>cidade</strong> - data
              </Typography>

            </div>
          </div>
        </DialogHeader>

        <DialogBody className=''>
          <div className='grid grid-cols-9 gap-2'>
            {questions && questions.map((question, index) => {
              const currentQuestionState = questionStates[question.id];
              let questionState = 3;

              if (currentQuestionState) {
                if (currentQuestionState.saved) {
                  questionState = 1;
                } else if (currentQuestionState.selected) {
                  questionState = 2;
                }
              }

              return (
                <span key={question.id} className='w-full' onClick={() => handleQuestionIndex(index)}>
                  <QuestionItem
                    index={index}
                    answer={1}
                    questionState={questionState}
                    statement={`${stringResizer(question.statement, 50)} ...`}
                  />
                </span>
              );
            })}
          </div>

        </DialogBody>
        <DialogFooter>
          <div className='mb-5 flex w-full flex-col items-center gap-4'>
            {getStatusText()}
          </div>
        </DialogFooter>
      </Dialog>
    </>
  );
}

export { FinishDialog };