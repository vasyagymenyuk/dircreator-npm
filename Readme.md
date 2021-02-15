The module helps to create directories with various nestings.

Example:

    const dc = require("dircreator")

    dc('/storage', ['photos/userAvatars', 'photos/vendorLogo', 'files/docx', 'files/texts'])

The function takes two required parameters: the main directory in which the child folders will be created and the directories themselves as an array.

Модуль помогает создавать каталоги с различной вложенностью.

Пример:

    const dc = require("dircreator")

    dc('/storage', ['photos/userAvatars', 'photos/vendorLogo', 'files/docx', 'files/texts'])

Функция принимает два обязательных параметра: основной каталог, в котором будут созданы дочерние папки и сами каталоги в виде массива.
