import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface ProfileCardProps {
  name: string;
  role: string;
  bio: string;
  avatar?: string;
}

const DEFAULT_AVATAR = 'https://via.placeholder.com/100';

export const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  role,
  bio,
  avatar,
}) => {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: avatar ?? DEFAULT_AVATAR }}
        style={styles.avatar}
      />

      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.role}>{role}</Text>
        <Text style={styles.bio}>{bio}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    margin: 16,
    flexDirection: 'row',
    alignItems: 'center',

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },

  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 16,
  },

  info: {
    flex: 1,
  },

  name: {
    fontSize: 22,
    fontWeight: '700',
    color: '#333',
    marginBottom: 4,
  },

  role: {
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
  },

  bio: {
    fontSize: 14,
    color: '#888',
    lineHeight: 20,
  },
});