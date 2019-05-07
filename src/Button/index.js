import BaseButton from './BaseButton';
import TextButton from './TextButton';
import OutlineButton from './OutlineButton';
import SolidButton from './SolidButton';

let Button = [];

// solid
Button = SolidButton;
Button.displayName = 'Button';

Button.Outline = OutlineButton;
Button.Outline.displayName = 'Button.Outline';

Button.Text = TextButton;
Button.Text.displayName = 'Button.Text';

Button.Base = BaseButton;
Button.Base.displayName = 'Button.Base';

export default Button;
