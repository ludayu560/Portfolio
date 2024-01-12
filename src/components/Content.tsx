import { Box, Tabs, Text } from '@mantine/core';
import AboutPanel from './AboutPanel';
import ExperiencePanel from './ExperiencePanel';
import HobbiesPanel from './HobbiesPanel';

const Content = () => {
    return (
        <Box h='100%'>
            <Tabs defaultValue="about" h='5vh'>
                <Tabs.List>
                    <Tabs.Tab value="about" >
                        <Text size='xs' className='bodyText'>About</Text>
                    </Tabs.Tab>
                    <Tabs.Tab value="experience" >
                        <Text size='xs' className='bodyText'>Experience</Text>
                    </Tabs.Tab>
                    <Tabs.Tab value="hobbies" >
                        <Text size='xs' className='bodyText'>Hobbies</Text>
                    </Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value="about">
                    <AboutPanel />
                </Tabs.Panel>

                <Tabs.Panel value="experience">
                    <ExperiencePanel/>
                </Tabs.Panel>

                <Tabs.Panel value="hobbies">
                    <HobbiesPanel/>
                </Tabs.Panel>

            </Tabs>
        </Box>
    );
};

export default Content;
