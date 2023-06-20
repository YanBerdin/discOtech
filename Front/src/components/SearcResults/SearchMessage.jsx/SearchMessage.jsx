function Message({ totalCount }) {
  return (
    <div>
      <p>La recherche a donné {totalCount} résultat{totalCount > 1 ? 's' : ''}</p>
    </div>
  );
}

export default Message;
