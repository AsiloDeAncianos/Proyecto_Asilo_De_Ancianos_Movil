import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation} from "@react-navigation/native";


const CampaignScreen = () => {
  const [selectedCampaign, setSelectedCampaign] = useState(null);
  const [donationAmount, setDonationAmount] = useState('');
  const [donationDescription, setDonationDescription] = useState('');

  const campaigns = [
    { id: 1, name: 'Campaña 1' },
    { id: 2, name: 'Campaña 2' },
    { id: 3, name: 'Campaña 3' },
    // Agrega más campañas según sea necesario
  ];

  const handleCampaignSelect = (campaign) => {
    setSelectedCampaign(campaign);
  };

  const handleDonation = () => {
    if (selectedCampaign) {
      console.log('Campaña:', selectedCampaign.name);
      console.log('Cantidad de donación:', donationAmount);
      console.log('Descripción:', donationDescription);
      setDonationAmount('');
      setDonationDescription('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Campañas Solidarias</Text>
      <FlatList
        data={campaigns}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Button
            title={item.name}
            onPress={() => handleCampaignSelect(item)}
            style={[
              styles.campaignButton,
              selectedCampaign?.id === item.id && styles.selectedCampaignButton,
            ]}
          />
        )}
      />
      {selectedCampaign && (
        <View style={styles.donationContainer}>
          <Text style={styles.donationTitle}>Donación para {selectedCampaign.name}:</Text>
          <TextInput
            style={styles.input}
            placeholder="Cantidad de donación"
            value={donationAmount}
            onChangeText={setDonationAmount}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            placeholder="Descripción"
            value={donationDescription}
            onChangeText={setDonationDescription}
          />
          <Button title="Donar" onPress={handleDonation} />
        </View>
      )}
    </View>
  );
};
const App = () => {
  const [showCampaigns, setShowCampaigns] = useState(false);

  const handleShowCampaigns = () => {
    setShowCampaigns(true);
  };

  return (
    <View style={styles.container}>
     
        {showCampaigns ? (
        <CampaignScreen />
      ) : (
        <Button title="Mostrar Campañas" onPress={handleShowCampaigns} />
      )}
    </View>
  );
};