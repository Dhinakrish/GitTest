import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import DatePicker from '@react-native-community/datetimepicker';

const App = () => {

  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [dateValue, setDateValue] = useState('Empty');

  const onChange = (event, selectedDate) => {

    const currentDate = new Date();
    setShowDatePicker(false)
    console.log("currentDate", currentDate)
    
  }

  return(
    <View>
      <Button
      title="Date Picker"
      onPress={()=>setShowDatePicker(true)}
      >
      </Button>
      <Text>
        Dhina
      </Text>
      {showDatePicker && (
        <DatePicker
        testID="dateTimeicker"
        value={date}
        mode="date"
        display="default"
        is24Hour={true}
        onChange={onChange}
        maximumDate={new Date()}
        />
      )}
    </View>
  )
}

export default App;