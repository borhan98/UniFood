import PropTypes from "prop-types";

const SectionTitle = ({ secTitle, secDescrip}) => {
    return (
        <div className="mb-10 mt-20 max-w-xl mx-auto text-center">
            <h3 className="text-3xl font-semibold text-zinc-700 mb-4 capitalize">{secTitle}</h3>
            <p className="text-sm md:text-base text-zinc-600">{secDescrip}</p>
        </div>
    );
};

export default SectionTitle;
SectionTitle.propTypes = {
    secTitle: PropTypes.string.isRequired,
    secDescrip: PropTypes.string.isRequired,
}