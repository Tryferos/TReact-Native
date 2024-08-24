import {FC} from 'react';
import {Column} from '../elements/Column';
import {Row} from '../elements/Row';
import {CustomText} from '../elements/CustomText';
import {CustomIcon} from '../elements/CustomIcon';
import {AppIconsType} from '../../types/icons';
import {ColorsType} from '../../constants/values';
import {Divider} from '../elements/Divider';
import {useUserAuthentication} from '../../store/authentication';
import {getLanguageName, useUserSettings} from '../../store/settings';
import {ScrollView} from 'react-native-gesture-handler';

export const UserModal = () => {
  const {signOut} = useUserAuthentication();
  const {language, theme, setTheme, setLanguage} = useUserSettings();
  const themeIcon: AppIconsType =
    theme === 'light' ? 'light-mode' : 'dark-mode';
  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  return (
    <ScrollView className="h-[215px]" showsVerticalScrollIndicator={false}>
      <Column className="py-2">
        <UserModalButton icon={themeIcon} title="Theme" onPress={changeTheme} />
        <UserModalButton
          icon="language"
          title={getLanguageName()}
          onPress={() => {}}
        />
        <Divider />
        <UserModalButton
          icon="privacy-tip"
          title={'Data & Privacy'}
          iconColor="main"
          onPress={() => {}}
        />

        <Divider />
        <UserModalButton
          icon="logout"
          title="Logout"
          iconColor="error"
          onPress={signOut}
        />
      </Column>
    </ScrollView>
  );
};
type UserModalButtonProps = {
  onPress: () => void;
  title: string;
  icon: AppIconsType;
  iconColor?: ColorsType;
};
const UserModalButton: FC<UserModalButtonProps> = ({
  onPress,
  title,
  icon,
  iconColor = 'black',
}) => {
  return (
    <Row onPress={onPress} className="px-2 py-2 justify-between items-center">
      <CustomText font="wotfardRegular" size="lg">
        {title}
      </CustomText>
      <CustomIcon icon={icon} size="md" color={iconColor} />
    </Row>
  );
};
