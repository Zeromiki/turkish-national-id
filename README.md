## Turkish National ID Verifier

This is a simple tool for verifying Turkish National ID. Verification process uses government API so rest assured results are true.

**Params**

| Argument Name | Alias | Variable Type | Multivalued |
| ------------- | -------------  | ------------- | ------------- |
| `id`  | `i` | Number  | false
| `firstname`  | `f` | String | true
| `lastname`  | `l` | String | true
| `birthday`  | `b` | String | true

*Birthday gets year*

Note : ***Use double dash while using argument names in full and use single dash while using aliases.*** 


**To download from github**

    git clone https://github.com/Zeromika/turkish-national-verification.git

**To install necessary packages**

    npm install

**Example**

    node index.js -i NATID -n First Name -l LastName -b 1990

