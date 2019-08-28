import React, {Component} from "react";
import AmountSelector2 from "../Utility/AmountSelector2";
import PropTypes from "prop-types";
import Icon from "../Icon/Icon";
import {Row, Col} from "bitshares-ui-style-guide";
import counterpart from "counterpart";

class SellReceive extends Component {
    static propTypes = {
        sellAssetInput: PropTypes.string,
        sellAsset: PropTypes.string,
        sellAssets: PropTypes.array,
        sellAmount: PropTypes.string,
        sellImgName: PropTypes.string,
        receiveAssetInput: PropTypes.string,
        receiveAsset: PropTypes.string,
        receiveAssets: PropTypes.array,
        receiveAmount: PropTypes.string,
        receiveImgName: PropTypes.string,
        onSellAssetInputChange: PropTypes.func.isRequired,
        onSellAmountChange: PropTypes.func.isRequired,
        onSellImageError: PropTypes.func.isRequired,
        onReceiveAssetInputChange: PropTypes.func.isRequired,
        onReceiveAmountChange: PropTypes.func.isRequired,
        onReceiveImageError: PropTypes.func.isRequired,
        onSwap: PropTypes.func.isRequired,
        isSwappable: PropTypes.bool
    };

    render() {
        const smallScreen = window.innerWidth < 850 ? true : false;
        const {
            sellAssetInput,
            sellAsset,
            sellAssets,
            sellAmount,
            sellImgName,
            receiveAssetInput,
            receiveAsset,
            receiveAssets,
            receiveAmount,
            receiveImgName,
            onSellAssetInputChange,
            onSellAmountChange,
            onSellImageError,
            onReceiveAssetInputChange,
            onReceiveAmountChange,
            onReceiveImageError,
            onReceiveAssetSearch,
            onSwap,
            isSwappable
        } = this.props;

        const sellSelector = (
            <AmountSelector2
                label={"exchange.sell"}
                assetInput={sellAssetInput}
                asset={sellAsset}
                assets={sellAssets}
                amount={sellAmount}
                onAssetInputChange={onSellAssetInputChange}
                onAmountChange={onSellAmountChange}
                onImageError={onSellImageError}
                imgName={sellImgName}
                placeholder={"0.0"}
            />
        );

        const receiveSelector = (
            <AmountSelector2
                label={"exchange.receive"}
                assetInput={receiveAssetInput}
                asset={receiveAsset}
                assets={receiveAssets}
                amount={receiveAmount}
                onAssetInputChange={onReceiveAssetInputChange}
                onSearch={onReceiveAssetSearch}
                onAmountChange={onReceiveAmountChange}
                onImageError={onReceiveImageError}
                imgName={receiveImgName}
                placeholder={"0.0"}
                tooltipText={counterpart.translate(
                    "exchange.quick_trade_details.tooltip"
                )}
            />
        );

        const btnStyle = {
            align: "center",
            display: "flex",
            justifyContent: "center"
        };

        if (!isSwappable) {
            btnStyle.opacity = 0.1;
        }

        const swapButton = (
            <div style={btnStyle}>
                <Icon
                    name="swap"
                    size="2x"
                    style={{
                        marginTop: "3rem"
                    }}
                    onClick={onSwap}
                />
            </div>
        );

        return (
            <div>
                {smallScreen ? (
                    <div>
                        <Row>{sellSelector}</Row>
                        <Row>{swapButton}</Row>
                        <Row>{receiveSelector}</Row>
                    </div>
                ) : (
                    <Row>
                        <Col span={10}>{sellSelector}</Col>
                        <Col span={4}>{swapButton}</Col>
                        <Col span={10}>{receiveSelector}</Col>
                    </Row>
                )}
            </div>
        );
    }
}

export default SellReceive;
