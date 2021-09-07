const fetchrockets = async () => {
  const resp = await fetch('https://api.spacexdata.com/v3/rockets');
  const respobj = await resp.json();
  return respobj;
};

export default fetchrockets;
