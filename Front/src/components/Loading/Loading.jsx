import './Loading.scss';

/**
 * Component for displaying a loading spinner.
 *
 * @returns {JSX.Element} The Loading component.
 */
function Loading() {
  return (
    <div className="Loading">
      <div className="loader">
        <div className="l" />
        <div className="l" />
        <div className="l" />
        <div className="l" />
        <div className="l" />
        <div className="l" />
        <div className="l" />
        <div className="l" />
        <div className="l" />
      </div>
    </div>

  );
}
export default Loading;
