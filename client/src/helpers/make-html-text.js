const makeHtmlText = (rawText) => {
  if (!rawText) {
    return null;
  }
  let arrRawText = rawText.split(/\n/);
  let id = 1;
  arrRawText = arrRawText.map(elem => {
    elem = <p key={id++}>{elem}</p>;
    return elem;
  })
  return arrRawText;
};

export default makeHtmlText;