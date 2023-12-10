# Spinning

Some doodles around knitting, spinning, fibre arts and other hobbies. [Live deploy](https://evelinev.github.io/spinning/)

NodeJS v20.10.0 with NPM v10.2.3

## To Do:

- Convert Sock Calculator tests to Table-driven tests
- Add Home app with welcome text and inspiration
- Add Mitten Knitting app
- more tests to each calculate function
- Deploy through github actions on merge to main branch
- (more) accessibility features
- sock knitting app: include a short row heel
- sock knitting app: add diagram (SVG) where to measure foot
- CSS grid, flexbox, autoprefixer
- Refactor navigation, create categories
- Print button which cleans up layout
- mitten knitting app: add diagram (SVG) where to measure hand
- Selectable presets for common values of gauge/footsize/handsize
- Add rectangle and increase/decrease calculators
- Add Hat knitting app
- Add backend to save projects
- upgrade to Angular 17
- update design with more modern shapes and colors

## Done

- ~Add service to keep track of metric vs imperial units~
- ~Convert grist calculator to use both units~
- ~Convert spin-to-crimp calculator to use both units~
- ~Add design/layout~
- ~Add formula to go from singles WPI to plied WPI~
- ~Deploy Angular version to GitHub pages~
- ~Add Sock knitting app (convert from React) and add tests~
- ~Run tests also in Node 20~
- ~Extract Gauge component from Sock app to re-use for Mitten app~
- ~Remove imperial units altogether~
- ~new formula: BPI(plied) = TPI(singles) \* numPlies (included in plied WPI app as optional)~

## Useful commands
because sometimes I don't use Angular for months at a time...

#### initial setup
```
npm install -g @angular/cli
```

#### day-to-day
```
ng serve
npm test
```

#### Release to the world
```
npm run prod
npm run deploy
```
