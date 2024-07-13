import MaterialIcons from 'react-native-vector-icons/glyphmaps/MaterialIcons.json';
import FontAwesomeIcons from 'react-native-vector-icons/glyphmaps/FontAwesome.json';

type Icons = keyof typeof MaterialIcons | keyof typeof FontAwesomeIcons;

export {type Icons as AppIconsType};
