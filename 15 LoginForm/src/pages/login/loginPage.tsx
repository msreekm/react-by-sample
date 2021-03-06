import * as React from "react"
import { Panel, ContentCenter } from '../../common';
import { Form } from './components/form';
import { LoginEntity } from "../../model/login";
import {ErrorBoundary} from '../utils/error-boundaries'

interface Props {
  loginInfo: LoginEntity;
  updateField: (string, any) => void;
  doLogin: () => void;
}


export const LoginPage = (props : Props) =>
  <ContentCenter>
    <Panel title="Please sign in">
      <ErrorBoundary>
      <Form
        {...props} 
      />
      </ErrorBoundary>
    </Panel>
  </ContentCenter>

