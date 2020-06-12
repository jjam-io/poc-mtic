import { render } from '@testing-library/angular';
import { AppComponent } from '../app/app.component';

describe('AppComponent', () => {
    it('should render the component', async () => {
        const { getByText } = await render(AppComponent);
        expect(getByText('POC meetic'));
    });
});
