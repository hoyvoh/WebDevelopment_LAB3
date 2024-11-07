class User {
  constructor(id, name, username, email, address, phone, website, company) {
    this.id = id;
    this.name = name;
    this.username = username;
    this.email = email;
    this.address = new Address(
      address.street,
      address.suite,
      address.city,
      address.zipcode,
      address.geo
    );
    this.phone = phone;
    this.website = website;
    this.company = new Company(company.name, company.catchPhrase, company.bs);
  }
}
