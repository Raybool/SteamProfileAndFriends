import { useFormik } from 'formik';
import { observer } from 'mobx-react';
import React from 'react';
import { Text, View } from 'react-native';

import { Button } from 'src/components/atoms/Button';
import { Steam } from 'src/components/atoms/icons/Steam';
import { Input } from 'src/components/molecules/Input';
import { useUserStore } from 'src/mobx/user';

import { styles } from './styles';
import { validate } from './utils';

export const Auth: React.FC = observer(() => {
  const { setApiKey, setSteamId, auth } = useUserStore();

  const onSubmit = (values: { steamId: string; apiKey: string }) => {
    setApiKey(values.apiKey);
    setSteamId(values.steamId);
    auth();
  };

  const formik = useFormik({
    initialValues: {
      steamId: '',
      apiKey: '',
    },
    validate,
    onSubmit,
  });

  return (
    <View style={styles.container}>
      <View style={styles.boxLogo}>
        <Steam size={100} />

        <Text style={styles.title}>Добро пожаловать!</Text>
      </View>

      <View style={styles.form}>
        <Input
          label="SteamID"
          onChange={formik.handleChange('steamId')}
          onBlur={formik.handleBlur('steamId')}
          value={formik.values.steamId}
          error={formik.errors.steamId}
        />

        <Input
          label="API Key"
          onChange={formik.handleChange('apiKey')}
          onBlur={formik.handleBlur('apiKey')}
          value={formik.values.apiKey}
          error={formik.errors.apiKey}
        />

        <Button onPress={() => formik.handleSubmit()} title="Войти" />
      </View>
    </View>
  );
});
