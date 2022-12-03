import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaRegWindowClose } from "react-icons/fa";

const OrderRow = ({ order, hendelDelete }) => {
  const {
    serviceName,
    price,
    customar,
    email,
    phone,
    service,
    _id,
    status,
  } = order;
  const [orderService, setOrderService] = useState({});

  useEffect(() => {
    fetch(
      `https://car-rent-server-codewithashim.vercel.app/services/${service}`
    )
      .then((res) => res.json())
      .then((data) => {
        setOrderService(data.data);
      });
  }, [service]);

  return (
    <tr>
      <th>
        <label onClick={() => hendelDelete(_id)}>
          <Link>
            <FaRegWindowClose></FaRegWindowClose>
          </Link>
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              {orderService.img && (
                <img src={orderService.img} alt={serviceName} />
              )}
            </div>
          </div>
          <div>
            <div className="font-bold">{customar}</div>
            <div className="text-sm opacity-50"></div>
          </div>
        </div>
      </td>
      <td>
        {serviceName}
        <br />
        <span className="badge badge-ghost badge-sm">
          Desktop Support Technician
        </span>
      </td>
      <td>{price}</td>
      <th>{email}</th>
      <th>{phone}</th>
      <th>
        <Link>
          {status ? (
            status
          ) : (
            <span className="badge badge-ghost badge-sm">Pending</span>
          )}
        </Link>
      </th>
    </tr>
  );
};

export default OrderRow;
