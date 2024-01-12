import { Box, Button, Flex, Text, TextInput, Title } from '@mantine/core';
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';

interface TypingComponentProps {
    hook: Dispatch<SetStateAction<boolean>>;
  }
  
const TypingComponent: React.FC<TypingComponentProps> = ({ hook }) => {
    const exampleText = "Speak friend and enter.";
  const [userInput, setUserInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    focusInput();
  }, []);

  useEffect(() => {
    if (userInput === exampleText) {
        submitInput()
    }
  }, [userInput]);

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }

  const submitInput = () => {
    console.log("You did it!");
    hook(false);
  }

  const renderColoredText = () => {
    return (
      <Title order={2} h={'auto'} fw={400}>
        {exampleText.split('').map((char, index) => {
          let color;
          if (index < userInput.length) {
            color = char === userInput[index] ? '#7FA480' : '#C87E74';
          } else {
            color = '#99947F';
          }
          return <span key={index} style={{ color }} className='typeFont'>{char}</span>;
        })}
      </Title>
    );
  };
  return (
    <Box style={{ position: 'relative' }} onClick={focusInput}>
        <Flex direction='column' align='center' justify='center' pb={'10vh'} px={'5vw'}>
            {renderColoredText()}
        </Flex>

        <Button className='skipButton' pos='absolute' bottom='1vh' right='1vw' onClick={submitInput}>
                <Text className='typeFont' h='auto'>
                    Skip →
                </Text>
        </Button>
        <TextInput
            ref={inputRef}
            value={userInput}
            onChange={(event) => {setUserInput(event.target.value)}}
            style={{ opacity: 0, height: 0, width: 0 }}/>
    </Box>
  );
};

export default TypingComponent;