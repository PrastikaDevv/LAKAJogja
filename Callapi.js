import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const Callapi = () => {
  const jsonUrl = "https://script.google.com/macros/s/AKfycbyoqu3H8JFmIWM-4_eMBJhJ5FwPgZHHtdNIuH8IZ4kBzZrDqDUIFMKcQ-LxZNbl3AaBow/exec";
  const [isLoading, setLoading] = useState(true);
  const [dataUser, setDataUser] = useState({});
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    fetch(jsonUrl)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setDataUser(json);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  function refreshPage() {
    fetch(jsonUrl)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setDataUser(json);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }

  return (
    <SafeAreaView>
      {isLoading ? (
        <View>
          <Text>Loading...</Text>
        </View>
      ) : (
        <View>
          <FlatList
            data={dataUser}
            onRefresh={() => {
              refreshPage();
            }}
            refreshing={refresh}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <View style={ styles.card}>
                  <Text style={styles.cardtitle}>Nama: {item.nama}</Text>
                  <Text>deskripsi: {item.deskripsi}</Text>
                  <Text>latitude: {item.latitude}</Text>
                  <Text>longitude: {item.longitude}</Text>
              </View>
            )}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    title: {
      paddingVertical: 12,
      backgroundColor: '#333',
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    avatar: {
      width: 80,
    },
    cardtitle: {
      fontSize: 12,
      fontWeight: 'bold',
    },
    card: {
      flexDirection: 'row',
      padding: 25,
      borderRadius: 10,
      backgroundColor: 'white',
      shadowColor: '#000',
      shadowOffset: {
        width: 1,
        height: 1,
      },
      shadowOpacity: 0.20,
      shadowRadius: 1.41,
      elevation: 2,
      marginHorizontal: 20,
      marginVertical: 7
    },
   })

export default Callapi;
