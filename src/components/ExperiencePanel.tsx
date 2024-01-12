import { Box, Text } from '@mantine/core';

const ExperiencePanel = () => {
    return (
        <Box p="md" style={{ maxWidth: 800, margin: '0 auto' }}>
            <Box style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
                <Text size="md" fw={400} className='bodyText'>
                    I'm studying Co-op Honours Computer Science at the University of Waterloo, graduating 2025.
                </Text>
            </Box>
        </Box>
    );
}

export default ExperiencePanel;