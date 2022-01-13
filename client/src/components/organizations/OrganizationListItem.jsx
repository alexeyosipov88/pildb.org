

const OrganizationListItem = () => {
  
  axios.get("http://localhost:4000/organizations").then((organizations) => {
    return organizations.data;
  })
  return (null);

}

export default OrganizationListItem;