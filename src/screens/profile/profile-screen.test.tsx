import ReactTestRenderer from 'react-test-renderer';
import {ProfileScreen} from './profile-screen';

describe('ProfileScreen', () => {
  it('affiche les informations du profil', () => {
    let tree!: ReactTestRenderer.ReactTestRenderer;
    ReactTestRenderer.act(() => {
      tree = ReactTestRenderer.create(<ProfileScreen />);
    });

    const rendered = JSON.stringify(tree.toJSON());
    expect(rendered).toContain('Léo Martin');
    expect(rendered).toContain('75 kg');
    expect(rendered).toContain('Running');
  });
});
