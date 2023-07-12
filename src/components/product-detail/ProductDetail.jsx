import { useNavigate, useParams } from 'react-router-dom';
import '../../style.css';
import { API_URLS } from '../../constants';
import { useFetch } from '../../hooks/useFetch/useFetch';
import Details from '../details/Details';

function ProductDetail() {

    const { productId } = useParams();
    const urlProductDetail = `${API_URLS.PRODUCTS.url}/${productId}`
    const navigate = useNavigate()
    const history = window.history

    const { data } = useFetch(urlProductDetail, API_URLS.PRODUCTS.config)
    console.log(productId);
    return (
        <>
            <div className="headerContainer">
                {history.length > 2 ? (<button onClick={() => navigate(-1)} className='backButton'>&larr; Back</button>) : null}
                <h2 className='headerTitleCard'>Product Detail</h2>
            </div>
            <Details {...data} />
        </>
    )
}

export default ProductDetail