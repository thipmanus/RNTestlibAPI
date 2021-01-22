import React, {Component} from 'react';
import {Text, View, FlatList, StyleSheet} from 'react-native';
import {ListItem, Avatar} from 'react-native-elements';
import {Header, Icon, Card} from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';

const TabIcon = (props) => (
  <Ionicons
    name={props.focused ? 'ios-home' : 'ios-home-outline'}
    size={35}
    color={props.focused ? 'grey' : 'darkgrey'}
  />
);

const lists = [
  {
    title: 'Appointments',
    icon: 'av-timer',
  },
  {
    title: 'Trips',
    icon: 'flight-takeoff',
  },
];

const list = [
  {
    name: 'Thipmaus Rattananupong',
    avatar_url:
      'https://scontent-kut2-1.xx.fbcdn.net/v/t1.0-9/119451025_3470257866359209_5200668643654162246_n.jpg?_nc_cat=108&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeHLHIcSHre9ZBLBF3KGp-k6FNILM8hNqRcU0gszyE2pFxSMofk75F0AMEGvTS6o85T4Pl6fexY4MoiAEz5MV9Gc&_nc_ohc=97tfovogULAAX86xXvV&_nc_ht=scontent-kut2-1.xx&oh=7b72d7eefc2552a99669edfcbc43dbe8&oe=602EFC45',
    subtitle: 'Jame',
  },
  {
    name: 'KG Engineering Co.,Ltd',
    avatar_url:
      'https://media.jobthai.com/v1/images/logo-pic-map/171395_logo_20191108124828.png',
    subtitle: 'KGE',
  },
  {
    name: 'Youtube',
    avatar_url:
      'https://assets.brandinside.asia/uploads/2016/10/YouTube-logo-full_color.png',
    subtitle: 'https://www.youtube.com/',
  },
  {
    name: 'Google',
    avatar_url:
      'https://pbs.twimg.com/profile_images/924682339258470401/HbmOMfzW.jpg',
    subtitle: 'https://www.google.co.th/',
  },
];
export class TabOne extends Component {
  static navigationOptions = {
    tabBarIcon: TabIcon,
  };

  keyExtractor = (item, index) => index.toString();

  renderItem = ({item}) => (
    <ListItem bottomDivider>
      <Avatar
        title={item.name[0]}
        source={item.avatar_url && {uri: item.avatar_url}}
      />
      <ListItem.Content>
        <ListItem.Title>{item.name}</ListItem.Title>
        <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem>
  );

  render() {
    return (
      <View>
        <Header
          centerComponent={{text: 'Tab One FlatList', style: {color: '#fff'}}}
        />
        <Card>
          <FlatList
            keyExtractor={this.keyExtractor}
            data={list}
            renderItem={this.renderItem}
          />
        </Card>
        <Card>
          {lists.map((item, i) => (
            <ListItem key={i} bottomDivider>
              <Icon name={item.icon} />
              <ListItem.Content>
                <ListItem.Title>{item.title}</ListItem.Title>
              </ListItem.Content>
              <ListItem.Chevron />
            </ListItem>
          ))}
        </Card>
      </View>
    );
  }
}

export default TabOne;
