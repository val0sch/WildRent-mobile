import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, 
  StyleSheet, Alert, Keyboard} from 'react-native';
import * as MailComposer from 'expo-mail-composer';

const ContactForm = () => {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    if ( subject.trim() === '' || message.trim() === '') {
      Alert.alert('Veuillez remplir tous les champs');
      return;
    } 
    else{
      var options = {}
      options = {
        subject: subject,
        recipients: ["wildrrent@gmail.com"],
        body: message
      }
    MailComposer.composeAsync(options)
  }
    
    
    setIsSubmitted(true); 
  };

  if (isSubmitted) {
    return (
      <View style={styles.container}>
        <Text>Message envoyé avec succès</Text>
      </View>
    );
  }
  const  handleKeyPress = ({ nativeEvent: { key: keyValue } }) => {
    console.log(keyValue);
    if(keyValue === 'Enter')
    {
      Keyboard.dismiss();
    }
};
  return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Objet du mail"
                value={subject}
                onChangeText={text => setSubject(text)}
                returnKeyType={ "done" }
            />
            <TextInput
                style={styles.textarea}
                placeholder="Message"
                multiline
                value={message}
                onChangeText={text => setMessage(text)}
                returnKeyType={ "done" }
                onKeyPress={handleKeyPress}
            />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Envoyer</Text>
        </TouchableOpacity>
        </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  input: {
    height: 40,
    borderWidth: 2,
    borderColor:'black',
    borderRadius: 4,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  textarea: {
    height: 100,
    borderWidth: 2,
    borderColor:'black',
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingTop: 10,
    marginBottom: 10,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#F1600D',
    paddingVertical: 10,
    borderRadius: 4,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});


export default ContactForm;
