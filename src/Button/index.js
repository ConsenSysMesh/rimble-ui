import BaseButton from './BaseButton';
import TextButton from './TextButton';
import OutlineButton from './OutlineButton';
import SolidButton from './SolidButton';

let Button = [];

// solid
Button = SolidButton;

// outline
Button.Outline = OutlineButton;

// text
Button.Text = TextButton;

Button.Base = BaseButton;

export default Button;
