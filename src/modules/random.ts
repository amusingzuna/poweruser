type Occurence = { name: string, chance: number };
type OccurenceRange = { name: string, min: number, max: number, reference: Occurence };

class Random {
    public occurences: Array<Occurence> = [];
    private occurenceRanges: Array<OccurenceRange> = [];

    constructor(occurences: Array<Occurence>) {
        let total = 0;

        occurences.forEach(occurence => {
            this.occurenceRanges.push({
                name: occurence.name,
                min: total,
                max: total + occurence.chance,
                reference: occurence
            });

            total += occurence.chance;
        });

        this.occurences = occurences;
    }

    pull = (): Occurence | undefined => {
        let generated = Math.random();

        return this.occurenceRanges.filter(occurenceRange => {
            if(generated >= occurenceRange.min && generated < occurenceRange.max)
                return occurenceRange.reference;
        })[0].reference;
    }
};

export { Random }