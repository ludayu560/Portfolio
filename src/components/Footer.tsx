import { Anchor, Flex, Group } from '@mantine/core';
import { IconBrandGithub, IconBrandLinkedin, IconMail } from '@tabler/icons-react';

const MyFooter = () => {
  return (
    <Group justify='flex-end' pb='5vh'>
      <Flex direction='column' gap='lg'>
        <Flex direction='column' align='center'>
          <Anchor href='https://github.com/ludayu560' target='_blank' mb={-10}>
            <IconBrandGithub className='footerIcons' color='#99947F' stroke={2}/>
          </Anchor>
        </Flex>
        <Flex direction='column' align='center'>
          <Anchor href='mailto:ldyu@uwaterloo.ca' target='_blank' mb={-10}>
            <IconMail className='footerIcons' color='#99947F' stroke={2}/>
          </Anchor>
        </Flex>
        <Flex direction='column' align='center'>
          <Anchor href='https://www.linkedin.com/in/luda-yu-201b71203/' target='_blank' mb={-10}>
            <IconBrandLinkedin className='footerIcons' color='#99947F' stroke={2}/>
          </Anchor>
        </Flex>
      </Flex>
    </Group>
  );
}

export default MyFooter;