const HexColor = ({ backgroundColor }) => {
    const styles = {
        backgroundColor,
        color: '#fff',
        textAlign: 'center',
        lineHeight: '100px',
    };
    
    return <div style={styles}>{backgroundColor}</div>;
};

const HexColors = ({ n }) => {
    const generateHexColor = () => {
        let str = '0123456789abcdef'
        let color = ''
        for (let i = 0; i < 6; i++) {
            let index = Math.floor(Math.random() * str.length)
            color += str[index]
        }
        return '#' + color
    };

    const hexColorList = [...Array(n)].map((_) => {
        const color = generateHexColor();
        return <HexColor key={color} backgroundColor={color} />;
    });

    return (
        <div>
            <h2>Hexadecimal Colors</h2>

            <div className="grid">
                {hexColorList}
            </div>
        </div>
    );
};

export default HexColors;