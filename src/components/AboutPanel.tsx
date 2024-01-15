import { Flex, Text } from '@mantine/core';

const AboutPanel = () => {
    return (
        <Flex direction='column' mx={'5vw'} my={'5vh'}>
            <Text size="md" fw={400} className='bodyText' pb='15vh'>
                I'm studying Co-op Honours Computer Science at the University of Waterloo, graduating 2025.
            </Text>
            <Text size="md" fw={400} className='bodyText'>
                I have an interest in ML! I'm currently working on implementing some of my favorite ML models in Rust!
            </Text>
        </Flex>
    );
};

export default AboutPanel;
