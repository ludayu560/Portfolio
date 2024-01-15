import { Flex, Text } from '@mantine/core';

const HobbiesPanel = () => {
    return (
        <Flex direction='column' mx={'5vw'} my={'5vh'}>
            <Text size="md" fw={400} className='bodyText' pb='15vh'>
                I'm a TFT enthusiast! I've been playing since Set 6 and I've hit Masters twice! 
            </Text>
            <Text size="md" fw={400} className='bodyText'>
                I've loved the change of pace hiking and camping brought since I was a kid, I'm currently looking to canoe more in the summer!
            </Text>
        </Flex>
    );
}

export default HobbiesPanel;