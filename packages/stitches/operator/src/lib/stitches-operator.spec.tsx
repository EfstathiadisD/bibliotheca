import { render } from '@testing-library/react';

import StitchesOperator from './stitches-operator';

describe('StitchesOperator', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<StitchesOperator />);
    expect(baseElement).toBeTruthy();
  });
});
