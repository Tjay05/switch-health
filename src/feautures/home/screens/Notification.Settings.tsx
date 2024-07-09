import { useState } from 'react';

import { Divider, DividerLine, DividerText, NotContainer, NotWrapper, Section, SectionDescription, SectionHeader, Switch, ToggleRow } from '../components/Notification.styles';

const NotificationSettings = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [soundsEnabled, setSoundsEnabled] = useState(false);
  const [appointmentReminderEnabled, setAppointmentReminderEnabled] = useState(false);

  return (
    <NotContainer>
      <NotWrapper>
        <Section>
          <ToggleRow>
            <SectionHeader>Notifications</SectionHeader>
            <SectionDescription>Allow notifications from this app</SectionDescription>
          </ToggleRow>
          <Switch 
            thumbColor='#fff'
            value={notificationsEnabled}
            onValueChange={setNotificationsEnabled}
          />
        </Section>
        <Divider>
          <DividerText>General</DividerText>
          <DividerLine/>
        </Divider>
        <Section>
          <ToggleRow>
            <SectionHeader>Sounds</SectionHeader>
            <SectionDescription>None</SectionDescription>
          </ToggleRow>
          <Switch 
            thumbColor='#fff'
            value={soundsEnabled}
            onValueChange={setSoundsEnabled}
          />
        </Section>
        <Divider>
          <DividerText>Reminders</DividerText>
          <DividerLine/>
        </Divider>
        <Section>
          <ToggleRow>
            <SectionHeader>Appointment reminders</SectionHeader>
            <SectionDescription>Make sound and pop up on screen</SectionDescription>
          </ToggleRow>
          <Switch 
            thumbColor='#fff'
            value={appointmentReminderEnabled}
            onValueChange={setAppointmentReminderEnabled}
          />
        </Section>
      </NotWrapper>
    </NotContainer>
  );
};

export default NotificationSettings;
