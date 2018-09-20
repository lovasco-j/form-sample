import React from 'react';
import FormWrapper from './FormWrapper'
import SampleForm from './SampleForm'

const App = () => (
    <FormWrapper>
        {(props) => <SampleForm {...props} />}
    </FormWrapper>
)

export default App;
