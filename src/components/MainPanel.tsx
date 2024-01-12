import { Box } from '@mantine/core';
import { useState } from 'react';
import TypingComponent from './TypingIntro';
import Content from './Content';

const MainPanel = () => {
    const [typing, setTyping] = useState(true);
    
  return (
    <Box style={{ 
        border: '3px solid black', 
        borderRadius: '50px', 
        padding: '20px'}}>
        {
            typing ? <TypingComponent hook={setTyping}/> : <Content />
        }
    </Box>
  );
};

export default MainPanel;
