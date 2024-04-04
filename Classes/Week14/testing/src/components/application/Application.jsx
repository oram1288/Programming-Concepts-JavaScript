const Application = () => {
  return (
    <>
      <h1>Application form</h1>
      <h2>For job</h2>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="firstname" />
        </div>
        <div>
          <label htmlFor="location">Location</label>
          <select id="location">
            <option value="">Select a Country</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="GB">United Kingdom</option>
            <option value="AU">Australia</option>
          </select>
        </div>
        <div>
          <button data-testid="t1">Submit</button>
        </div>
        <div>
          <label htmlFor="bio">Bio</label>
          <textarea id="bio" cols="30" rows="10"></textarea>
        </div>
      </form>
    </>
  );
};

export default Application;
