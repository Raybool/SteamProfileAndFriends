import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    borderTopWidth: 0, // pixel perfect
    elevation: 4,
    fontSize: 20,
    fontWeight: '500',
    backgroundColor: '#ffffff',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    height: 66,
    paddingTop: 20,
    paddingBottom: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: '500',
    marginTop: 8,
  },
});
