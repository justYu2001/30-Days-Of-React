const getPrimeList = (n) => {
    const isPrime = Array(n + 1).fill(true);
    isPrime[0] = false;
    isPrime[1] = false;

    const primeList = [];

    for (let i = 2; i <= n; i++) {
        if (isPrime[i]) {
            primeList.push(i);
        }

        for (const prime of primeList) {
            if (prime * i > n) {
                break;
            }

            isPrime[i * prime] = false;

            if (i % prime === 0) {
                break;
            }
        }
    }
    
    return isPrime;
};

const NumberGenerator = ({ n }) => {
    const isPrime = getPrimeList(n);

    const numberList = [...Array(n + 1)].map((_, number) => {
        let backgroundColor;
        if (isPrime[number]) {
            backgroundColor = '#ea685b';
        } else if (number % 2 === 0) {
            backgroundColor = '#5bbc7a';
        } else {
            backgroundColor = '#f7dc5c';
        }

        const styles = {
            backgroundColor,
            color: '#fff',
            fontSize: '36px',
            lineHeight: '100px',
            textAlign: 'center',
        };

        return (
            <div key={`${number}${backgroundColor}`} style={styles}>
                {number}
            </div>
        );
    });

    return (
        <div>
            <h2>Number Generator</h2>
            <div className="grid">
                {numberList}
            </div>
        </div>
    );
};

export default NumberGenerator;