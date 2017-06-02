// Component for displaying buttons for a Menu
import React from 'react';
import { ScrollView, Text } from 'react-native';
import { Card, CardSection, Button, PageHeading } from './components/common';

const MainMenuComponent = () => {
  return (
    <ScrollView>
      <Card>

        <PageHeading>
          <Text style={styles.textStyle}>
            Main Menu
          </Text>
        </PageHeading>

        <CardSection>
          <Button onPress={() => console.log("Conversions")}>
            CONVERSIONS
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress={() => console.log("Angle")}>
            ANGLE CONVERSIONS
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress={() => console.log("press")}>
            ANGLE ADD/SUBTRACT
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress={() => console.log("press")}>
            ABOUT/LEGAL
          </Button>
        </CardSection>

      </Card>
    </ScrollView>
  );
};

const styles = {
  textStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    color: '#007aff',
    fontSize: 18,
    fontWeight: '800',
    paddingTop: 10,
    paddingBottom: 10
  }
}

export default MainMenuComponent;
