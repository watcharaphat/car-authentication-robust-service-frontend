const initialState = {
  user1: {
    publicKey: 'ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQCfMK3NeABKX5lHhOQfEYO7ffUiUavGfADzWJ6heoHBjEtF2sinqjuo86D6A4o/z+XVAIyKsaaLOnfYPEC6FHfwnqScn5lVK19a3eux6/EL55ZxIjWDoW70fiJAEhKG9w6NeIDv8BQ2sa72CkLxwrSwJNuieLz5FhUjtIvbbsyMgYW3jO7Gx6O8Nw/8g7nPcYZgmJJDsTEW5RehgF1kWBmNNwXXdQBuF37cB5B9OucwmLc9npzNsehekavZGnx+aciyKQXvE7kzLutVcpPcHUwGIkLJtHk/IjOkEpI9s99S/LIiYD6krjvXtdAm/NfVfedp2AkoVTw/A9yUOyOVyvf9 watcharaphat@Watcharaphats-MacBook.local',
    privateKey: `-----BEGIN RSA PRIVATE KEY-----
      MIIEowIBAAKCAQEAnzCtzXgASl+ZR4TkHxGDu331IlGrxnwA81ieoXqBwYxLRdrI
      p6o7qPOg+gOKP8/l1QCMirGmizp32DxAuhR38J6knJ+ZVStfWt3rsevxC+eWcSI1
      g6Fu9H4iQBIShvcOjXiA7/AUNrGu9gpC8cK0sCTboni8+RYVI7SL227MjIGFt4zu
      xsejvDcP/IO5z3GGYJiSQ7ExFuUXoYBdZFgZjTcF13UAbhd+3AeQfTrnMJi3PZ6c
      zbHoXpGr2Rp8fmnIsikF7xO5My7rVXKT3B1MBiJCybR5PyIzpBKSPbPfUvyyImA+
      pK4717XQJvzX1X3nadgJKFU8PwPclDsjlcr3/QIDAQABAoIBAHYEteXNoJGC/HVc
      XW93Ia2//Ru7ZtlZF69RtRFMbKRcaXXZdMdw2pgwPtj8BOO4MtFOfeNZP3qbFzyV
      tvr9r8oRI0MGw7uz0xbfzhxzKprDz/ICBaCX71WNqcDMZTXwNbbGbvjziVjfNDIu
      e2EXE7Q/LyHt11PnfjahZMqDA1zqgiE28oiNfaa38cktThzUMQ9Q9SiQPs1jnxzo
      ttF//WNZTkj3sf1KBUO7jE9gO8XAc2q7NdwBjCSlHFcIaWHep/lohf1bww5/JrTN
      4JyPtwxj0hiQCTb92mAuoWExkjERI4GHaWvXSjzm+RXnSQGQE3H3/YcqnzA84ZPy
      WhawhuECgYEAzbno+DmtailxJvPVnZXLonM0WS+ZrzUVlzOLimsB7GnroxYBqPf8
      qYrSibmbpYbymcxfqi2u343LshFk7cRoyQJCJS3IevpZHeaZOVZJQN8gbfn5JcdD
      n1C2npyD1TU/b/sCDecP5IyywaCtZ+kdMFcNbm7c840dFvdmVzsrbNUCgYEAxheB
      TjvK6+9cPWd2PMExsMzuAee0WZpvkXSvhhLBOvuVmvvh+8Wk4XqolsYrXGsRqbMS
      fFT0STdc3HqgY+I4oO5PMd130NVB1GNgJUnsqXNcBZFc82ESEK09xhNexyPL+gjr
      XZPj7qQhBWI+I89ERgjB1D0s/VGcqRqACDKr0okCgYBDvc/kzLk5l+PWe7v/Y+/l
      0iGOrInik4xEeYidT5cWjdo1nW12ghIEkd251BBYdRM1aYKmutw2aK6GOAwP7vjC
      F6hILccyF3V4zxHtO2hroA1BqWpM8kxmDWHU4JzYe+wjp3eJtGgbTekesRXofW5L
      GJ8nmgHPgMvvYA+m8aje8QKBgEtdif6f1RZqnOdnw55dym//p9Xlt8IXdbcbc+RI
      ome0bDjo+BN4IMEAj7+9aaXhvniX/sJ69+4bOCNSLE+UNANWZ58LKZi0ajVKEbxe
      IcJed3ZO1dRq7BqYLtZ7bCXLwsFAP3v81k1m+IE53XZ2Vv1mO4hqNgGy2S2lPWzh
      CmoxAoGBAMOmdDmrMPACVS8lL1BCpTcohN4kE5ZjBxtki+OuKr6ZLaTLBGV9zy0A
      SezWxiM19Oz/eCk9eZRl7bnWlUJkRKhy208WuyNpxq1NZWi/lbBVEnfGUi7VLXkf
      hOEoQvZ/7RHPoPkhoTxuAQqoovtN/xIYGr/Qa4HKnoJDSizHPWqf
      -----END RSA PRIVATE KEY-----`,
  },
  user2: {
    publicKey: 'ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQC0oAMcgaGCwpIjEzNi+dIwA0Pp1etZt6ElFz5sq04zinVjQ8HOQd3oTHovIYNTO4PKrE1fm85OrKK05p80PXUsOwJ7aaOyCM9fvNTlowWZtj5rKELyrRmW1qZ8MHj8c9RYVSbDJuEOXOsKuw6gcU05wFq+Tt4KoMTWGPCr+9TFf4L0+nPdthJqTkJgJegObvBJXw7u+Co+dPZjT0KescjpaGm7+XVU9viigHKGD6+yWrLpsSjkPy4MHvEyca41Gxf6+EKjLnBMhMBnOkyf4NsP1DhMyrwVcMcPk+AXx+/0HVV9jPN1rgsPGjKEXpqZqs0PRD868YCKH4hCmehrob5t watcharaphat@Watcharaphats-MacBook.local',
    privateKey: `-----BEGIN RSA PRIVATE KEY-----
      MIIEowIBAAKCAQEAtKADHIGhgsKSIxMzYvnSMAND6dXrWbehJRc+bKtOM4p1Y0PB
      zkHd6Ex6LyGDUzuDyqxNX5vOTqyitOafND11LDsCe2mjsgjPX7zU5aMFmbY+ayhC
      8q0ZltamfDB4/HPUWFUmwybhDlzrCrsOoHFNOcBavk7eCqDE1hjwq/vUxX+C9Ppz
      3bYSak5CYCXoDm7wSV8O7vgqPnT2Y09CnrHI6Whpu/l1VPb4ooByhg+vslqy6bEo
      5D8uDB7xMnGuNRsX+vhCoy5wTITAZzpMn+DbD9Q4TMq8FXDHD5PgF8fv9B1VfYzz
      da4LDxoyhF6amarND0Q/OvGAih+IQpnoa6G+bQIDAQABAoIBAEbIFbAMFJC7Uq0w
      DwkQQQ/Tl7+AtvO3hAyW6T2Ie+KytYGqwb3kDePEZHUnuuDZB7Jahw+abORjvncJ
      kQXVt58XmMdoBF/2F926j+tVURKFWjx/0IxszQRRJXixPhggA+yBoekDyVnpi6nu
      17KD8/FXsbe2DEk56yjDKT0cOKsTvhMlzyYUHGAB8W0VgOJuhjujUo8ADvNOgN9T
      MlNUDxJUwU9C0m/Tzt8U3RykKMIxMeWyi6u60AEWwEfitEMztdUK03KQviSQpjhX
      MeLVRgPe9slTFSSP78wqf7XpIv0aAmkhiNQeK2mXjT4c7q4+AVJ4Y4OOpPhpR/Bh
      /8PpGHkCgYEA5IkrsEIjxst65BCPakPjCh2Vbadt/+/EylrTKPK4Nymq8XSHYZRD
      J2otwumHu6UgY6T/FrEEzs+hcb5rASO30G+rzHnUcjcjEjX6IyMNMmUFYPPl5h90
      uT9HZn17wNr9M4mX/RpKLs0ciNmem83J9tBpQNLWjdyZmJOUvV2PAb8CgYEAylTh
      3CZ0Oie5VmLRJNEcgl59WjQyDEo1PnSyjKNmBJji5MBgfxo2l2V2B+TEWIvXuXqt
      obKdeivGtaxV+wTodmgQoNnTCadEL+MWO+2iRMF8TIyHoTGF6KbUHysV2Vm1a1ix
      25D37khND2JwmgcFn5iH9bwnitcB/tGM2iKUMtMCgYAlEI4yXve4dSXwOTNZU7tN
      17B1gVMY0EVFYGeg24S/BZYA5RpT3BzsFo9nbkKiT0yqfIcWog0akZgof26RV76n
      IoVle1jWUVTxzilMa5HnW3T83XGq2e0vYjDtUWqxw5KPOkCZPxtK7d8z3r+Xm0+n
      JPP9HHTJuz55/W2BLNxVtwKBgQCUxsGlnekM8jTIHrVm+xSZkF1gPM0oWFC6chjw
      bR4Q91Kvnf3WuDG4NXUK7N6rtXiU/G48XhiJwzLEV8qJX9yHZJIFlOYnTQVIqRSq
      UFxnbla1+weoMcAjiLiliorwXZSXMIrnxrtoTWXMkDf4Kn2qEwC2Yvo4j0z6UJ/f
      rlmG3QKBgAJX9yO8QWgtFZr6OgaBZWwxMwqcyrMM3t+WI/Olw9Mrn8T+6lh2g8/F
      BcLfDVrDyPmL9z3tIZpOgNmChut4IcmN43uVddQHx/cPxlE2WdZgb8lzkVVmly/x
      yqHfUddEHDkSMzw+t/v17ROYwLD9PaZYjjuEZbVoBDPIn4ywGbz0
      -----END RSA PRIVATE KEY-----`
  },
};

export const users = (state = initialState, action) => {
  switch (action.type) {
    default:
      return initialState;
  }
};
