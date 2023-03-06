import { Formik } from 'formik'
import { useState } from 'react'
import { useSessionContext } from '../context/session.context'
import * as Yup from 'yup';

const schema = Yup.object().shape({
    email: Yup.string().email('Invalid Email').required('Field requiered'),
    password: Yup.string().required('Field requiered')
});

const SignIn = () => {

    const { login, user } = useSessionContext()
    const [infoSession, setValues] = useState({
        email: '',
        password: ''
    });

    return (
        <Formik initialValues={infoSession} validationSchema={schema} onSubmit={(v) => handleSubmit(v)}>
            {(props) => (
                <Form>
                <Field name='email'>
                  {({ infoSession, form }) => (
                    <FormControl isInvalid={form.errors.email && form.touched.email}>
                      <FormLabel>E-Mail</FormLabel>
                      <Input value={infoSession.email} placeholder='email' />
                      <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name='password'>
                  {({ infoSession, form }) => (
                    <FormControl type='password' isInvalid={form.errors.name && form.touched.name}>
                      <FormLabel>Password</FormLabel>
                      <Input value={infoSession.password} placeholder='password' />
                      <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Button
                  mt={4}
                  colorScheme='green'
                  type='submit'
                >
                  Enter
                </Button>
              </Form>
            )}
        </Formik>

    )

};

export default SignIn;