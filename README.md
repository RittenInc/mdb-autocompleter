## Demonstration of MDB-Autocompleter in a library

Currently experiencing issues with putting mdb-autocompleter in a library minimal code in `autocompleter.component.html`. Receiving:

```text
Error: projects/mdb-pro/src/lib/autocompleter/autocompleter.component.html(1,1): : Directive MdbAutoCompleterDirective, Property '_handleInput' is protected and only accessible within class 'MdbAutoCompleterDirective' and its subclasses.
projects/mdb-pro/src/lib/autocompleter/autocompleter.component.html(1,1): : Directive MdbAutoCompleterDirective, Property '_handleKeyDown' is protected and only accessible within class 'MdbAutoCompleterDirective' and its subclasses.
projects/mdb-pro/src/lib/autocompleter/autocompleter.component.html(1,1): : Directive MdbAutoCompleterDirective, Property '_handleFocusIn' is protected and only accessible within class 'MdbAutoCompleterDirective' and its subclasses.
projects/mdb-pro/src/lib/autocompleter/autocompleter.component.html(1,1): : Directive MdbAutoCompleterDirective, Property '_handleBlurIn' is protected and only accessible within class 'MdbAutoCompleterDirective' and its subclasses.
projects/mdb-pro/src/lib/autocompleter/autocompleter.component.html(1,1): : Directive MdbAutoCompleterDirective, Property '_handleMouseDown' is protected and only accessible within class 'MdbAutoCompleterDirective' and its subclasses.
```

Works file in the regular project:

Same code in `app.component.html` and `npm run build` works!

## Build

Add your MDB key to package json

```json
"ng-uikit-pro-standard": "git+https://oauth2:xxxxxx@git.mdbootstrap.com/mdb/angular/ng-uikit-pro-standard.git",
```

Replace xxxxxx with your api key

Run `npm run build:mdb` to build the project. And see the above error messagings.
