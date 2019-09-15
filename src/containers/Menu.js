import { connect } from 'react-redux';
import TopHeader from '../components/Header/Top/Top';
import {bindActionCreators} from "redux";
import * as languageSettings from '../actions/language';

const mapStarteToProps = ({ cart, language }) => ({
    language: language.language,
    count: cart.items.length
});
const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(languageSettings, dispatch),
});

export default connect(mapStarteToProps, mapDispatchToProps)(TopHeader);
