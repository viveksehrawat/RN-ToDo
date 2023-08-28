import React from 'react';
import {render} from '@testing-library/react-native';
import AuthHeader from '../src/components/AuthHeader';

describe('AuthHeader', () => {
  it('renders the heading and subheading correctly', () => {
    const headingText = 'Welcome to My App';
    const subheadingText = 'Please log in to continue';

    const {getByText} = render(
      <AuthHeader heading={headingText} subheading={subheadingText} />,
    );

    const heading = getByText(headingText);
    const subheading = getByText(subheadingText);

    expect(heading).toBeTruthy();
    expect(subheading).toBeTruthy();
  });
});
