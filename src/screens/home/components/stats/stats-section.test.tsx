import ReactTestRenderer from 'react-test-renderer';
import {StatsSection} from './stats-section';

describe('StatsSection', () => {
  it('affiche les statistiques et convertit le temps', () => {
    let tree!: ReactTestRenderer.ReactTestRenderer;
    ReactTestRenderer.act(() => {
      tree = ReactTestRenderer.create(
        <StatsSection stats={{sessions: 34, spentTime: 210, kcal: 753}} />,
      );
    });

    const rendered = JSON.stringify(tree.toJSON());
    expect(rendered).toContain('34');
    expect(rendered).toContain('3 h 30'); // 210 minutes converties
    expect(rendered).toContain('753');
    expect(rendered).toContain('séances');
  });
});
