import React, { Component } from 'react';
import * as RN from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { firebase } from 'firebase';

// components
// profile pic component
class CommunityProfilePicComponent extends Component {
  render() {
    return (
      <RN.View>
        <RN.Text>Coming Soon!</RN.Text>
      </RN.View>
    );
  }
}

// web view helper
class CommunityWebViewComponent extends Component {
  render() {
    return (
      <RN.View>
        <RN.Text>Coming Soon!</RN.Text>
      </RN.View>
    );
  }
}

// screens
// loading screen
class CommunityLoadingScreen extends Component {
  render() {
    return (
      <RN.View>
        <RN.Text>Coming Soon!</RN.Text>
      </RN.View>
    );
  }
}

// home screen
class CommunityHomeScreen extends Component {
  render() {
    return (
      <RN.View>
        <RN.Text>Coming Soon!</RN.Text>
      </RN.View>
    );
  }
}

// q&a
class CommunityQandA extends Component {
  render() {
    return (
      <RN.View>
        <RN.Text>Coming Soon!</RN.Text>
      </RN.View>
    );
  }
}

// q&a list
class CommunityQandAList extends Component {
  render() {
    return (
      <RN.View>
        <RN.Text>Coming Soon!</RN.Text>
      </RN.View>
    );
  }
}

// group finder
class CommunityGroupsList extends Component {
  render() {
    return (
      <RN.View>
        <RN.Text>Coming Soon!</RN.Text>
      </RN.View>
    );
  }
}

// group profile viewer
class CommunityGroupProfile extends Component {
  render() {
    return (
      <RN.View>
        <RN.Text>Coming Soon!</RN.Text>
      </RN.View>
    );
  }
}

// galery of the universe
class CommunityGallery extends Component {
  render() {
    return (
      <RN.View>
        <RN.Text>Coming Soon!</RN.Text>
      </RN.View>
    );
  }
}

// a community's member list
class CommunityGroupUsersList extends Component {
  render() {
    return (
      <RN.View>
        <RN.Text>Coming Soon!</RN.Text>
      </RN.View>
    );
  }
}

// find a user
class CommunityUsersList extends Component {
  render() {
    return (
      <RN.View>
        <RN.Text>Coming Soon!</RN.Text>
      </RN.View>
    );
  }
}

// a community user's profile
class CommunityUserProfile extends Component {
  render() {
    return (
      <RN.View>
        <RN.Text>Coming Soon!</RN.Text>
      </RN.View>
    );
  }
}

// a community's group chat
class CommunityGroupChat extends Component {
  render() {
    return (
      <RN.View>
        <RN.Text>Coming Soon!</RN.Text>
      </RN.View>
    );
  }
}

// list of chats currently going on in the community
class CommunityGroupChatList extends Component {
  render() {
    return (
      <RN.View>
        <RN.Text>Coming Soon!</RN.Text>
      </RN.View>
    );
  }
}

// a list of blogs written by a community
class CommunityGroupBlogs extends Component {
  render() {
    return (
      <RN.View>
        <RN.Text>Coming Soon!</RN.Text>
      </RN.View>
    );
  }
}

class CommunityGroupReadBlog extends Component {
  render() {
    return (
      <RN.View>
        <RN.Text>Coming Soon!</RN.Text>
      </RN.View>
    );
  }
}

// write a new blog for a community
class CommunityGroupWriteBlog extends Component {
  render() {
    return (
      <RN.View>
        <RN.Text>Coming Soon!</RN.Text>
      </RN.View>
    );
  }
}

// edit the blogs if you have permissions.
class CommunityGroupEditBlog extends Component {
  render() {
    return (
      <RN.View>
        <RN.Text>Coming Soon!</RN.Text>
      </RN.View>
    );
  }
}

// Make a new group
class CommunityGroupNew extends Component {
  render() {
    return (
      <RN.View>
        <RN.Text>Coming Soon!</RN.Text>
      </RN.View>
    );
  }
}

// group settings
class CommunityGroupSettings extends Component {
  render() {
    return (
      <RN.View>
        <RN.Text>Coming Soon!</RN.Text>
      </RN.View>
    );
  }
}

// the whole main thing
const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="loading"
      screenOptions={{
        headerShown: false,
      }}>

      <Stack.Screen component={CommunityLoadingScreen} name="loading" />
      <Stack.Screen component={CommunityHomeScreen} name="home" />
      <Stack.Screen component={CommunityGallery} name="gallery" />

      <Stack.Screen component={CommunityUsersList} name="userslist" />
      <Stack.Screen component={CommunityUserProfile} name="userprofile" />

      <Stack.Screen component={CommunityGroupsList} name="grouplist" />
      <Stack.Screen component={CommunityGroupProfile} name="groupprofile" />
      <Stack.Screen component={CommunityGroupUsersList} name="groupusers" />
      <Stack.Screen component={CommunityGroupBlogs} name="groupblog" />
      <Stack.Screen component={CommunityGroupReadBlog} name="groupreadblog" />
      <Stack.Screen component={CommunityGroupWriteBlog} name="groupwriteblog" />
      <Stack.Screen component={CommunityGroupEditBlog} name="groupeditblog" />
      <Stack.Screen component={CommunityGroupChat} name="groupchat" />
      <Stack.Screen component={CommunityGroupChatList} name="groupchatlist" />
      <Stack.Screen component={CommunityGroupNew} name="groupnew" />
      <Stack.Screen component={CommunityGroupSettings} name="groupsettings" />
    </Stack.Navigator>
  );
};

export default class Community extends Component {
  render() {
    return <StackNavigator />;
  }
}

// styles
const styles = RN.StyleSheet.create({
  defaultView: {
    margin: 0,
    padding: 0,
  },
});
