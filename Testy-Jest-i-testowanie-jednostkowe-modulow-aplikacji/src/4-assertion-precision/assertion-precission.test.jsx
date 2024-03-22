import { render, screen } from '@testing-library/react';

const items = [1, 2, 3, 4, 5];
const result = items.map((x) => x ** 2);

describe.skip('precision', () => {
  it('bad', () => {
    expect(result.length === items.length + 1).toBe(true);
  });
  it('better', () => {
    expect(result.length).toBe(items.length + 1);
  });
  it('best', () => {
    expect(result).toHaveLength(items.length + 1);
  });
});

const Checkbox = ({ checked, disabled}) => {
  return (
    <label>
      Czy wyrażasz zgodę
      <input type="checkbox" checked={checked} disabled={disabled} onChange={console.log}></input>
    </label>
  );
};

describe('checkbox element', () => {
  // it('should be checked and disabled - bad', () => {
  //   render(<Checkbox />);
  //   const checkbox = screen.getByLabelText('Czy wyrażasz zgodę');
  //   expect(checkbox.disabled).toBeTruthy();
  //   expect(checkbox.checked).toBeFalsy();
  //   expect(checkbox.value).toBeTruthy();
  // });

  // it('should be checked and disabled - good', () => {
  //   render(<Checkbox disabled={true} checked={true} />)
    
  //   const checkbox = screen.getAllByLabelText('Czy wyrażasz zgodę');

  //   expect(checkbox).toBe(true);
  //   expect(checkbox).toBeTruthy();
  // });
});
