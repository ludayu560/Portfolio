import { Flex, List, Text } from '@mantine/core';

const ExperiencePanel = () => {
    return (
        <Flex direction='column' mx={'5vw'} my={'5vh'}>
            <Text size="md" fw={400} className='bodyText'>
                4 time "Excellent" co-op rating at the following companies:
            </Text>
            <List mb={'20vh'}>
                <List.Item>            
                    <Text size="md" fw={400} className='bodyText'>
                        AvanteIO (startup)
                    </Text>
                </List.Item>
                <List.Item>            
                    <Text size="md" fw={400} className='bodyText'>
                        Aisha Comfortable Coliving (startup)
                    </Text>
                </List.Item>
                <List.Item>            
                    <Text size="md" fw={400} className='bodyText'>
                        The Department of National Defence
                    </Text>
                </List.Item>
                <List.Item>            
                    <Text size="md" fw={400} className='bodyText'>
                        The Regional Municipality of York
                    </Text>
                </List.Item>
            </List>
            <Text size="md" fw={400} className='bodyText'>
                I think startups are the best place to learn and grow as a developer. I'm looking for my next startup co-op!
            </Text>
        </Flex>
    );
}

export default ExperiencePanel;